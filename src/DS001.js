export default function About() {
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
          ストレススコア グラフ
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
