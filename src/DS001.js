import { useEffect, useState } from "react";
import { fetchTodayHealthData } from "./services/fetchDailyData";

export default function About() {
  const [todayData, setTodayData] = useState(null);

  useEffect(() => {
    const userId = "075f3f5a-15ca-46d3-8368-c30cb472ef68"; // 固定ユーザーID
    const getData = async () => {
      const result = await fetchTodayHealthData(userId);
      setTodayData(result);
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 text-gray-100 p-8">
      {/* 行動方針・優先タスク */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg text-center shadow-md">
          行動方針（静的）
        </div>
        <div className="bg-gray-800 p-4 rounded-lg text-center shadow-md">
          優先タスク（静的）
        </div>
      </div>

      {/* グラフエリア */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg text-center shadow-md h-64">
          <h2 className="text-lg font-semibold mb-2">ストレススコア グラフ</h2>

          {/* 🔽 Supabaseから取ったデータをここに表示 */}
          {todayData ? (
            <div className="text-left bg-gray-900 p-3 rounded">
              <p><span className="text-gray-400">📅 ID:</span> {todayData.id}</p>
              <p><span className="text-gray-400">👤 User:</span> {todayData.user_id}</p>
              {/* ここにスコアや日付などを追加 */}
            </div>
          ) : (
            <p className="text-gray-500 mt-4">データを取得中...</p>
          )}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg text-center shadow-md h-64">
          ストレススコア 他要素組み合わせ グラフ
        </div>
      </div>

      {/* 感動的な言葉（動的予定） */}
      <div className="bg-gray-800 p-4 rounded-lg text-center shadow-md mb-6">
        元気が出る感動的な言葉（動的・ランダム）
      </div>

      {/* メンタルハウツー */}
      <div className="bg-gray-800 p-4 rounded-lg text-center shadow-md">
        メンタルサバイバルハウツー（静的）
      </div>
    </div>
  );
}
