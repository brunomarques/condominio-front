<template>
  <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
    <div class="xl:w-10/12">
      <div class="block bg-white shadow-lg rounded-lg">
        <div class="lg:flex lg:flex-wrap g-0">
          <div class="lg:w-6/12 px-4 md:px-0">
            <div class="md:p-12 md:mx-6">
              <div class="text-center">
                <a href="/">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo"
                       class="mx-auto w-48"
                  />
                </a>

                <h4 class="text-xl font-semibold mt-1 mb-8 pb-1">Esqueceu a senha?</h4>
              </div>

              <div
                  v-if="response.message"
                  :class="`bg-${response.color}-100 rounded-lg py-5 px-6 mb-4 text-base text-${response.color}-700 mb-3 shadow`" role="alert">
                {{ response.message }}
              </div>

              <vee-form
                  ref="forgotPasswordForm"
                  @submit="forgotPassword"
                  :validation-schema="schema"
              >
                <div class="mb-4">
                  <vee-field
                      type="email"
                      name="email"
                      v-model="email"
                      id="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="E-mail"
                  />

                  <ErrorMessage class="text-red-500 text-sm mb-2" name="email" as="div" />
                </div>

                <div class="flex items-center justify-between pt-1 mb-12 pb-1">
                  <button
                      class="px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-200 ease-in-out"
                      type="submit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style="
                      background: linear-gradient(
                        to right,
                        #ee7724,
                        #d8363a,
                        #dd3675,
                        #b44593
                      );
                    "
                      :disabled="spinner.sending"
                  >
                    <div
                        v-if="spinner.sending"
                        class="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full mr-2" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    Enviar solicitação
                  </button>
                  <a class="text-gray-500" href="/login">Lembrei, voltar</a>
                </div>
              </vee-form>
            </div>
          </div>
          <div
              class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              style="
            background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
          "
          >
            <div class="text-white px-4 py-6 md:p-12 md:mx-6">
              <h4 class="text-xl font-semibold mb-6">Condomínio Vista do Sol</h4>
              <p class="text-sm">
                Situado no bairro Villa Real em Sabará-MG, foi construido em um local privilegiado com visão definitiva para mata.
              </p>
              <p class="text-sm mt-3">
                Um bairro tranquilo e seguro. Longe de todo o barulho da cidade, parece que você está em um sitio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Cookie from "js-cookie";
import messages from "@/utils/messages";

export default {
  name: "ForgotPassword",

  components: {
  },

  data() {
    return {
      email: '',
      schema: {
        email: 'required|email',
      },
      response: {
        color: '',
        message: ''
      },
      spinner: {
        sending: false
      }
    }
  },

  methods: {
    async forgotPassword() {
      const validate = await this.$refs.forgotPasswordForm.validate()
      if(!validate) return

      const payload = {
        email: this.email
      }

      this.resetResponse()

      this.spinner.sending = true

      this.$axios.post('/forgot-password', payload)
          .then(() => {
            this.response.color = "green"
            this.response.message = "Solicitação de troca de senha enviada!"

            this.resetForm()
          })
          .catch((e) => {
            const errorCode = e?.response?.data?.error || 'ServerError'

            this.response.color = "red"
            this.response.message = messages[errorCode]
          })
          .finally(() => {
            this.spinner.sending = false
          })
    },
    resetResponse() {
      this.response.color = ""
      this.response.message = ""
    },
    resetForm() {
      this.email = null
    }
  }
}
</script>

<style scoped>

</style>