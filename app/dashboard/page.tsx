import DashboardView from './components/DashboardView';


// Server Component (Feature Container)
export default function DashboardPage() {
  // Pass data to Client Component (Presentation)
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DashboardView />
    </main>
  );
}
