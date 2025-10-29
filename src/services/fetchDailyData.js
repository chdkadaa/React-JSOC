// src/services/fetchDailyData.js
import { supabase } from "../supabaseClient";

/**
 * 今日のdaily_health_statusデータを取得する関数
 * @param {string} userId - 対象ユーザーのUUID
 * @returns {Promise<object|null>} データオブジェクト or null
 */
export async function fetchTodayHealthData(userId) {
  const today = new Date().toISOString().split("T")[0]; // 例: 2025-10-29

  const { data, error } = await supabase
    .from("daily_health_status")
    .select("*")
    .eq("user_id", userId)
    .gte("created_at", `${today}T00:00:00`)
    .lt("created_at", `${today}T23:59:59`)
    .single();

  if (error) {
    console.error("❌ Supabase fetch error:", error.message);
    return null;
  }

  console.log("✅ Fetched data:", data);
  return data;
}
