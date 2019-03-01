
Let's take a look at the Vue.js-specific items in the template to get a feel for what's going on. The first one we encounter is a v-if on both the Log Time button and an h3 that says "Log Time". The v-if is checking where we are in our routing, and we're saying that we don't want the button to be displayed if the route we're currently at is /time-entries/log-time.

We're going to create the LogTime component later and we'll see how this all fits together at that point, but essentially once we're at this route, we don't want to show the button for navigating to it. The same goes for the "Log Time" h3, but in reverse. We've also got a v-link in the button at the top, which we've actually seen previously. This directive is from vue-router and will instruct the router to go to the /time-entries/log-time route when clicked.

The next thing we see is another router-view below the hr tag, and this is because we'll be registering a sub-route for logging time entries. Essentially we're nesting one route within another, so the LogTime component will be two levels deep. This is the cool thing about routing--we can just keep putting router-view elements in our templates, and as long as we register a component for them, they will keep nesting further down.

The first p tag we see has a v-if condition on it which checks for whether an array called timeEntries has anything in it. If it's empty, a message indicating so will be displayed. Next we get to our first repeater. The form for Vue.js repeaters is v-for="alias in collection", which is very similar to the pattern we see in other frameworks.

If you're unfamiliar with repeaters, what this does is loops over an array and outputs some HTML for each item in the array, starting with the HTML element that the repeat statement is placed on, up to the element that closes it.

We're using a new syntax shorthand in the img tag for binding the user's profile picture to the src attribute. Using the colon is the same as doing v-bind and saves us a few keystrokes. By binding the image URL to the src attribute like we are, we don't need to template it out with the curly braces. Rather, the binding gets evaluated and resolves to the URL provided in our data (which we'll see below).

We're templating out the information for the time entry throughout the rest of the template, and near the end we have a button that uses another of Vue's shorthands--@click. This binds a click event to the button element which calls the deleteTimeEntry method (which we've yet to create), passing in the currently iterated-over time entry.

Next, let's put in the script.

// src/components/TimeEntries.vue

<script>
  export default {
    data () {
      // We want to start with an existing time entry
      let existingEntry = {
        user: {
          firstName: 'Ryan',
          lastName: 'Chenkie',
          email: 'ryanchenkie@gmail.com',
          image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250'
        },
        comment: 'First time entry',
        totalTime: 1.5,
        date: '2016-04-08'
      }
      return {
        // Start out with the existing entry
        // by placing it in the array
        timeEntries: [existingEntry]
      }
    },
    methods: {
      deleteTimeEntry (timeEntry) {
        // Get the index of the clicked time entry and splice it out
        let index = this.timeEntries.indexOf(timeEntry)
        if (window.confirm('Are you sure you want to delete this time entry?')) {
          this.timeEntries.splice(index, 1)
          this.$dispatch('deleteTime', timeEntry)
        }
      }
    },
    events: {
      timeUpdate (timeEntry) {
        this.timeEntries.push(timeEntry)
        return true
      }
    }
  }
</script>
We're starting out with one time entry that has a user object, as well as a comment, totalTime value, and date. The method for deleting time entries is fairly simple--we're just looking for the index of the clicked time entry in the array and then splicing it out. Remember that we're just working with local data in this part of the tutorial series, but in later installments we'll see how to work with remote data that is persisted to a database. We're also calling $dispatch as part of the delete method. We'll see more on this later, but essentially what we want to do here is dispatch an event with the data that we deleted so we can listen for it in other components. This will come into play when we get to coding the sidebar.

Finally, we've got a timeUpdate method on the events key. This method is going to come into play when we make the LogTime component and is what will be emitted when the user saves a time entry. When that happens, a timeEntry object will come through and be pushed onto the timeEntries array in this component. This is how we will be facilitating communication between different components for now.

Let's not forget some simple styles for this component.

// src/components/TimeEntries.vue


We just need to add routing for this component to main.js and we'll be able to see it in the browser.

// src/main.js

import TimeEntries from './components/TimeEntries.vue'

...

router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries
  }
})

...
vuejs tutorial time-tracker

Creating the Log Time Component
Next we need a component that provides a screen for the user to log time entries. This one is a bit smaller, so let's take a look at the whole file all at once.

// src/components/LogTime.vue

<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>Date</label>
        <input 
          type="date"
          class="form-control"
          v-model="timeEntry.date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>Hours</label>
        <input 
          type="number" 
          class="form-control"
          v-model="timeEntry.totalTime"
          placeholder="Hours"
        />
      </div>      
    </div>    
    <div class="form-group">
      <div class="col-sm-12">
        <label>Comment</label>
        <input 
          type="text" 
          class="form-control"
          v-model="timeEntry.comment"
          placeholder="Comment"
        />
      </div>        
    </div>    
    <button class="btn btn-primary" @click="save()">Save</button>
    <button v-link="'/time-entries'" class="btn btn-danger">Cancel</button>    
    <hr>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        // We default the user object on
        // the timeEntry to have some user details
        timeEntry: {
          user: {
            firstName: 'Ryan',
            lastName: 'Chenkie',
            email: 'ryanchenkie@gmail.com',
            image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250&d=retro&r=g'
          }
        }
      }
    },
    methods: {
      save () {
        let timeEntry = this.timeEntry
        // We dispatch the timeEntry so it can be pushed
        // onto the timeEntries array in the parent component
        this.$dispatch('timeUpdate', timeEntry)
        this.timeEntry = {}
      }
    }
  }
</script>
We've got input elements in place for the user to enter a date, number of hours, and a comment for a new time entry. In the data() function, we're initializing the timeEntry model with some data for the user so that we can have a name and profile photo. There's an obvious limitation with this simple app: it's only really good for one user. That's by design at this stage though, and we'll adapt the application to multiple users with login in a later installment.

We've got a single method in this component called save which takes the object that has the user's input and dispatches it out of the component with $dispatch. Now in our other components we can listen for the dispatched timeUpdate event and grab the timeEntry object that comes through with it. So why are we doing this? So that we can have some method of communicating data between our components. Since data for a given component is scoped to it, we need some mechanism to communicate from that component to the outside world. This method works well enough, but can get messy when our app grows and needs to communicate a lot of data between many components. We'll see how to fix this by using Vuex for state management later on in the series. We've already got our event listener set up on the TimeEntriescomponent, so when we save a new entry, we can see it get added to the list.

We need to add the LogTime component as a sub-route of TimeEntries in our router configuration. By doing this, the router will know that LogTime is a child of TimeEntries, and the appropriate URI structure will be generated when we navigate to it.

// src/main.js

import LogTime from './components/LogTime.vue'

...

router.map({
  '/home': {
    component: Home
  },
  '/time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
})

...
vuejs tutorial time-tracker

Creating the Sidebar Component
We're almost done for the first part of this series. The only thing left to do now is to add a Sidebar component which will hold the total number of hours for all of our time entries. Before we code the actual component, we need to make some adjustments to App.vue so that we can handle the data that is dispatched from the LogTime component when new entries are saved, and from the TimeEntries component when they are deleted.

First, place the sidebar element into the template.

// src/App.vue

  ...

  <div class="container">
    <div class="col-sm-3">
      <sidebar :time="totalTime"></sidebar>      
    </div>
    <div class="col-sm-9">
      <router-view></router-view>
    </div>
  </div>

  ...
We've got a property binding on sidebar called time that points to totalTime. By binding the property in this way, we'll be able to pick it up in the actual Sidebar component as a prop. If you've used React at all, passing properties into elements in this way will no doubt feel familiar.

We need some logic to calculate the values to pass down in the time property.

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: { 'sidebar': Sidebar },
    data () {
      return {
        // Start with the same value as our
        // first time entry. Hard-coded for now
        // because we'll use a different approach
        // in the next article anyway
        totalTime: 1.5
      }
    },
    events: {
      // Increment the totalTime value based on the new
      // time entry that is dispatched up
      timeUpdate (timeEntry) {
        this.totalTime += parseFloat(timeEntry.totalTime)
      },
      // Decrement totalTime when a time entry is deleted
      deleteTime (timeEntry) {
        this.totalTime -= parseFloat(timeEntry.totalTime)
      }
    }
  }
</script>


<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">Total Time</h1>   
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ time }} hours</h1>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['time']
  }
</script>

