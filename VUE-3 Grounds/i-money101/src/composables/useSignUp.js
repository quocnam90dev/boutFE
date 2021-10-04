import { ref } from 'vue'
import { projectAuth } from "@/configs/firebase";

const error = ref(null)
const isPending = ref(false)

async function signup(email, password, displayName) {
  error.value = null
  isPending.value = true
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!response) {
      throw new Error("Could not create new user.")
    }

    await response.user.updateProfile({ displayName })

    return response
  } catch (err) {
    console.log(err)
    error.value = err.message
  } finally {
    isPending.value = false
  }
}

export function useSignUp() {
  return { error, isPending, signup }
}