<template>
  <UIPage class="edit-page">
    <div class="overflow-auto">
      <div class="mx-auto w-11/12 sm:w-7/12 py-8 grid gap-6">
        <div>
          <h2 class="text-2xl mb-8">Персональные данные</h2>
          <form class="grid gap-6">
            <div class="relative z-0 w-full mb-5">
              <input id="name" type="text" name="name" placeholder="">
              <label>Enter name</label>
              <span class="error">Name is required</span>
            </div>
            <div class="relative z-0 w-full mb-5">
              <input id="email" type="text" name="name" placeholder="">
              <label>Enter email</label>
              <span class="error">Email is required</span>
            </div>

            <div class="mt-4">
              <UIButton block>
                Сохранить
              </UIButton>
            </div>
          </form>
        </div>
        <div>
          <h2 class="text-2xl mb-8">Безопасность</h2>
          <form class="grid gap-6">
            <UISwitch title="Анонимный аккаунт"/>
            <div class="relative z-0 w-full mb-5">
              <input id="password" type="text" name="password" placeholder="">
              <label>Enter password</label>
              <span class="error">Password is required</span>
            </div>
            <div class="relative z-0 w-full mb-5">
              <input id="repassword" type="text" name="repassword" placeholder="">
              <label>Enter password</label>
              <span class="error">Password is required</span>
            </div>

            <div class="mt-4">
              <UIButton block>
                Сохранить
              </UIButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </UIPage>
</template>

<script>
import UIPage from "@/components/UI/UIPage";
import UIButton from "@/components/UI/UIButton";
import UISwitch from "@/components/UI/UISwitch";
export default {
name: "Edit",
  components: {UISwitch, UIButton, UIPage}
}
</script>

<style scoped>

</style>
