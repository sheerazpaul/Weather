const TEAM = [
  {
    name: 'Elara Vance',
    role: 'Lead Developer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBZ5p8nA-ypRJ1bRnB2uIuG0lJhBvIyPqRyF9fEi8hQj0kL1mN2oP3qR4sT5uW6xY7zA8bC9dE0fG1hI2jK3lM4nO5pQ6rS7tU8vW9xY0z',
  },
  {
    name: 'Marcus Chen',
    role: 'Lead Designer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5p8nA-ypRJ1bRnB2uIuG0lJhBvIyPqRyF9fEi8hQj0kL1mN2oP3qR4sT5uW6xY7zA8bC9dE0fG1hI2jK3lM4nO5pQ6rS7tU8vW9xY0z',
  },
  {
    name: 'Aisha Patel',
    role: 'Data Scientist',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5p8nA-ypRJ1bRnB2uIuG0lJhBvIyPqRyF9fEi8hQj0kL1mN2oP3qR4sT5uW6xY7zA8bC9dE0fG1hI2jK3lM4nO5pQ6rS7tU8vW9xY0z',
  },
  {
    name: 'Leo Rodriguez',
    role: 'Cloud Architect',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5p8nA-ypRJ1bRnB2uIuG0lJhBvIyPqRyF9fEi8hQj0kL1mN2oP3qR4sT5uW6xY7zA8bC9dE0fG1hI2jK3lM4nO5pQ6rS7tU8vW9xY0z',
  },
];

export default function TeamGrid() {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold text-on-surface tracking-tight">Meet the Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {TEAM.map((member) => (
          <div key={member.name} className="glass-card p-6 flex flex-col items-center text-center space-y-4 group hover-lift">
            <div className="relative">
              <img
                className="w-24 h-24 rounded-full object-cover border-4 border-surface shadow-md"
                src={member.avatar}
                alt={member.name}
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary scale-0 group-hover:scale-110 transition-transform opacity-50" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-primary text-xs font-medium mt-1 uppercase tracking-widest">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
