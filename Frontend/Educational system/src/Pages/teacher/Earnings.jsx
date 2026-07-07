import { useState, useEffect } from "react";

const Earnings = () => {
  const [earnings, setEarnings] = useState(0);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const storedEarnings = localStorage.getItem("teacherEarnings");
    if (storedEarnings) {
      setEarnings(Number(storedEarnings));
    }
    setSessions([
      { id: 1, title: "Live session with John", amount: 50 },
      { id: 2, title: "Video solution review", amount: 30 },
    ]);
  }, []);

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold">Earnings</h2>
        <p className="mt-2 text-slate-600">Total earnings from completed questions and sessions.</p>
        <div className="mt-4 rounded-lg bg-slate-100 p-4 text-xl font-semibold">
          ${earnings}
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="text-lg font-semibold">Recent Payments</h3>
        <ul className="mt-4 space-y-3">
          {sessions.map((session) => (
            <li key={session.id} className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <span>{session.title}</span>
                <span className="font-semibold">${session.amount}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Earnings;
