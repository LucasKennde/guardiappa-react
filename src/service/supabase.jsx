import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://fwgbluayjyotmdmibats.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3Z2JsdWF5anlvdG1kbWliYXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1Mjk5NzAsImV4cCI6MjA1ODEwNTk3MH0.5mpeznTdeLiHJ-yv56Bhus6aXcV3azY0wSo3UNolbRA"

export const supabase = createClient(supabaseURL, supabaseAnonKey);