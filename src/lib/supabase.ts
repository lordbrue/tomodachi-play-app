import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Mock client for development when Supabase is not configured
const mockSupabase = {
  auth: {
    signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
      // Simulate login - accept any email/password for demo
      if (email && password) {
        return { data: { user: { id: 'mock-user', email } }, error: null }
      }
      return { data: null, error: { message: 'Invalid credentials' } }
    },
    signUp: async ({ email, password, options }: { email: string; password: string; options?: any }) => {
      // Simulate signup - always success for demo
      return {
        data: {
          user: { id: 'mock-user', email },
          session: null
        },
        error: null
      }
    },
    signInWithOAuth: async ({ provider }: { provider: string }) => {
      // Simulate OAuth - redirect to home
      window.location.href = '/'
      return { data: null, error: null }
    },
    signOut: async () => {
      return { error: null }
    },
    onAuthStateChange: (callback: Function) => {
      // Mock auth state
      return {
        data: {
          subscription: {
            unsubscribe: () => {}
          }
        }
      }
    }
  }
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : mockSupabase