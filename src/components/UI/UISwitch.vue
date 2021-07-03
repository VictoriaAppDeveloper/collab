<template>
 <div class="switch flex items-center">
   <div class="relative inline-block w-10 mr-2 bg-gray-100 h-6 rounded-full align-middle select-none transition duration-200 ease-in">
     <input type="checkbox" name="switch" id="switch" class="switch-checkbox transition-all duration-150 left-0 absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"/>
     <label for="switch" class="switch-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
   </div>
   <label for="switch" class="ml-4 block static z-0 select-none">{{title}}</label>
 </div>
</template>

<script>
export default {
  name: "UISwitch",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>
