<template>
    <div class="quickview-wrapper  builder hidden-sm hidden-xs " id="builder">
<div class="p-l-30 p-r-30 ">
<a class="builder-close quickview-toggle pg-close" data-toggle="quickview" data-toggle-element="#builder" href="#"></a>
<a class="builder-toggle" data-toggle="quickview" data-toggle-element="#builder"><i class="pg pg-theme"></i></a>
<ul class="nav nav-tabs nav-tabs-simple nav-tabs-primary m-t-10" id="builderTabs" role="tablist">
<li class="nav-item">
<a class="nav-link " data-toggle="tab" to="#tabLayouts"  role="tab" aria-controls="home"
 @click="$event.target.classList.toggle('active')" aria-expanded="true">
    <span>Add Meeting</span></a>
</li>
<li class="nav-item">
<a class="nav-link "  @click="$event.target.classList.toggle('active')" data-toggle="tab" to="#tabThemes" role="tab" aria-controls="profile" aria-expanded="false">
    <span>Colores</span></a>
</li>
</ul>
<div class="tab-content m-b-30 p-l-30">
<div class="tab-pane" id="tabLayouts" role="tabcard" aria-expanded="true">

    
<div class="scroll-wrapper scrollable visible" style="position: relative;"><div class="scrollable scroll-content" 
 style="height: 598px; margin-bottom: 0px; margin-right: 0px; max-height: none;">
<div class="p-l-10 p-r-50">
<h5 class="semi-bold">
Layout options
</h5>
<p class="no-margin">
Builder make it easier
</p>
<p class="small hint-text m-b-20">
Customize and Preview your dashboard.
</p>
<div class="row p-b-35">
<div class="col-6 ">
<a class="btn-toggle-layout fs-12 active " data-action="menuDefault" href="#"><img alt="Menu divided icon" 
 class="m-b-15" src="../../assets/assets/img/demo/menu_divided_con.png" data-src="assets/img/demo/menu_divided_con.png" 
 data-src-retina="assets/img/demo/menu_divided_con_2x.png" width="126" height="95">
<span class="text-dark m-t-5">Divided Header &amp; Condensed / Quick
Menu</span></a>
</div>
<div class="col-6">
<a class="btn-toggle-layout fs-12" data-action="menuBelow" href="#">
<img alt="Full header icon" class="m-b-15 " src="../../assets/assets/img/demo/full_header_con.png" data-src-retina="assets/img/demo/full_header_con_2x.png" width="126" height="95"> <span class="text-dark m-t-5">Full Width Header &amp; Condensed/ Quick
Menu</span></a>
</div>
</div>
</div>
</div><div class="scroll-element scroll-x"><div class="scroll-element_outer"><div class="scroll-element_size"></div><div class="scroll-element_track"></div><div class="scroll-bar" style="width: 96px;"></div></div></div><div class="scroll-element scroll-y"><div class="scroll-element_outer"><div class="scroll-element_size"></div><div class="scroll-element_track"></div><div class="scroll-bar" style="height: 96px;"></div></div></div></div>
</div>
<div class="tab-pane active" id="tabThemes" role="tabcard" aria-expanded="true">
<div class="scroll-wrapper scrollable" style="position: relative;"><div class="scrollable scroll-content scroll-scrolly_visible" style="height: auto; margin-bottom: 0px; margin-right: 0px; max-height: 598px;">
<div class="p-l-10 p-r-50">
</div>
</div><div class="scroll-element scroll-x scroll-scrolly_visible"><div class="scroll-element_outer"><div class="scroll-element_size"></div><div class="scroll-element_track"></div><div class="scroll-bar" style="width: 89px;"></div></div></div><div class="scroll-element scroll-y scroll-scrolly_visible"><div class="scroll-element_outer"><div class="scroll-element_size"></div><div class="scroll-element_track"></div><div class="scroll-bar" style="height: 408px; top: 0px;"></div></div></div></div>
</div>
</div>
</div>
</div>
</template>
