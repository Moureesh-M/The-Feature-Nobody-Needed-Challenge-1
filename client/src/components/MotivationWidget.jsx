/**
 * Productivity Insights widget.
 * Replaces the old quote-based Motivational Mode with task-driven feedback.
 */
export default function MotivationWidget({ tasks = [] }) {
  const totalTasks = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = totalTasks - completedCount;
  const nextTask = tasks.find((task) => !task.completed);

  const progressLabel = totalTasks
    ? `${completedCount} / ${totalTasks} tasks completed`
    : "No tasks yet.";

  const cardMessage = totalTasks === 0
    ? "Add a task to get a quick win and start building momentum."
    : pendingCount === 0
    ? "All tasks are complete. Great focus!"
    : `Next up: ${nextTask.title}`;

  const tips = [
    "Tackle the smallest pending task first to build momentum.",
    "Batch similar work to reduce context switching.",
    "Take short breaks after each completed task to sustain focus.",
    "Review your task list and remove low-value items.",
  ];

  const tip = tips[completedCount % tips.length];

  return (
    <div className="motivation-widget">
      <h3>Productivity Insights</h3>
      <p className="progress-label">{progressLabel}</p>
      <p className="focus-message">{cardMessage}</p>
      <div className="productivity-tip">
        <strong>Focus Tip:</strong> {tip}
      </div>
    </div>
  );
}
