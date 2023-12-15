<template>
  <div class="feedback" v-if="!showSucces">
    <h2 class="mb-3">Форма обратной связи</h2>
    <p class="mb-4">Мы всегда готовы ответить на любой вопрос, а также услышать ваши отзывы и предложения по работе нашего сервиса</p>
    <form>
      <div class="row mb-3">
        <div class="col">
          <Input
            placeholder="Ваше имя"
            type="text"
            v-model="formData.name"
          />
        </div>
        <div class="col">
          <Input
            placeholder="E-mail"
            type="email"
            v-model="formData.email"
          />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <Input
            placeholder="Телефон"
            type="tel"
            v-model="formData.tel"
          />
        </div>
        <div class="col">
          <Input
            placeholder="Город"
            type="text"
            v-model="formData.city"
          />
        </div>
      </div>
      <div class="mb-3">
        <select class="form-select" v-model="formData.selected">
          <option value="" disabled>Тема обращения</option>
          <option value="a">Отзывы и предложения</option>
          <option value="b">Вопрос по контенту</option>
        </select>
      </div>
      <div class="mb-3">
        <textarea v-model="formData.question" class="form-control" type="text" placeholder="Опишите ваш вопрос"></textarea>
      </div>
      <div class="mb-3">
        <label for="docs" class="file w-100"><a>Выберите файл</a> или перетащите в поле
          <span>DOC, PDF до 5Мб</span></label>
        <input class="d-none" type="file" id="docs" name="docs" accept="doc,.docx,.pdf" />
      </div>
      <div class="form-check mb-4">
        <input class="form-check-input" type="checkbox" id="agree">
        <label class="form-check-label" for="agree">
          Согласен с условиями <a>политики обработки персональных данных</a>
        </label>
      </div>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary" type="button" @click="sendData">Отправить</button>
      </div>
    </form>
  </div>
  <div class="feedback" v-else>
    <h2 class="mb-3">Спасибо за ваш вопрос</h2>
    <p>Мы обязательно откликнемся на ваш вопрос в ближайшее время</p>
  </div>
</template>
<script setup lang="ts">
import Input from "~/components/Input/Input.vue";
import { useStore } from "~/store/store";
import type { formData } from "~/types/types";

const store = useStore();
const { list, getData } = store;

const showSucces = ref(false);

const formData = ref({
  name: '',
  email: '',
  tel: '',
  city: '',
  selected: '',
  question: ''
});

const sendData = () => {
  getData(formData.value);
  showSucces.value = true;
}
</script>
<style lang="sass">
h2
  font-size: 28px
  line-height: 130%

p
  color: #5C5C5C

.feedback
  background: #FFFFFF
  font-size: 14px
  line-height: 16px
  width: 628px
  padding: 56px 48px 32px

  .form-select
    color: #A6A6A6
    font-size: 14px
    line-height: 16px
    height: 40px

    &:focus
      border-color: #1D76F9
      box-shadow: none

  .form-control
    border-radius: 4px
    font-size: 14px
    line-height: 16px
    padding: 8px 12px 8px 16px

  textarea
    min-height: 110px

    &::placeholder
      color: #A6A6A6

    &:focus,
    &:not(:placeholder-shown)
      box-shadow: none

  .file
    border: 1px #1D76F9 dashed
    border-radius: 4px
    padding: 12px 16px
    text-align: center

    a
      color: #1D76F9

    span
      display: block
      color: #A6A6A6

  .form-check
    label
      color: #A6A6A6
      line-height: 20px

      a
        color: #1D76F9

  .btn
    font-size: 16px
    font-weight: 500
    line-height: 140%
    border-radius: 4px
    padding: 13px 52px
</style>
