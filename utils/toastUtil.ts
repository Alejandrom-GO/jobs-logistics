import { toast } from 'vue-sonner'

export function showToast(message: string, description: string) {
  toast(message, {
    description: description,
  })
} 