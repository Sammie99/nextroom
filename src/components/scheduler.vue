<template></template>
<script>
import { Scheduler } from "@ssense/sscheduler";
export default {
  mounted() {
    const scheduler = new Scheduler();
    const availability = scheduler.getAvailability({
      from: "2019-02-22",
      to: "2019-03-01",
      duration: 60,
      interval: 30,
      schedule: [
        {
          weekdays: {
            from: "07:00",
            to: "19:00",
            unavailability: [{ from: "12:00", to: "13:00" }]
          },
          unavailability: [
            // two different types of unavailability structure
            { from: "2017-02-20 00:00", to: "2017-02-27 00:00" },
            { date: "2017-02-15", from: "12:00", to: "13:00" }
          ],
          allocated: [
            { from: "2017-02-01 13:00", duration: 60 },
            { from: "2017-02-01 14:00", duration: 60 }
          ]
        },
        {
          weekdays: {
            from: "08:00",
            to: "20:00"
          },
          unavailability: [{ from: "2017-02-06 00:00", to: "2017-02-16 00:00" }]
        }
      ]
    });
  }
};
</script>
