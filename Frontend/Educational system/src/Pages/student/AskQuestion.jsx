import { useState } from "react";
import { createQuestion } from "../../api/questionapi";

const AskQuestion = () => {
  const [formData, setFormData] = useState({
    Subject: "",
    TopicName: "",
    Title: "",
    Description: "",
    questionType: "LIVE",
    price: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createQuestion(formData);
      setMessage({ type: "success", text: "Question submitted successfully." });
      setFormData({ Subject: "", TopicName: "", Title: "", Description: "", questionType: "LIVE", price: "" });
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.message || "Unable to submit question." });
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Ask a Question</h2>
      {message && (
        <div className={`mb-4 rounded-md p-3 ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Subject</label>
          <input
            name="Subject"
            value={formData.Subject}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Topic Name</label>
          <input
            name="TopicName"
            value={formData.TopicName}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Title</label>
          <input
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Description</label>
          <textarea
            name="Description"
            rows="5"
            value={formData.Description}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-slate-700">Question Type</label>
            <select
              name="questionType"
              value={formData.questionType}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
            >
              <option value="LIVE">LIVE</option>
              <option value="VIDEO">VIDEO</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Price</label>
            <input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 w-full rounded border p-2"
            />
          </div>
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
