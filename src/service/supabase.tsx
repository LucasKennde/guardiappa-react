import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://bqnlgvenwzilqaeisemm.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxbmxndmVud3ppbHFhZWlzZW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3NDMyNTgsImV4cCI6MjA0MTMxOTI1OH0.3ILe37xwNDtSBO8CJhf5BpRX7Ed2j-LeKGTVUrEeDKU"

export const supabase = createClient(supabaseURL, supabaseAnonKey);