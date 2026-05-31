import { EditorLayout } from "@/components/editor/editor-layout"

export default function EditorPage() {
  return (
    <EditorLayout>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-primary">Welcome to the Editor</h1>
            <p className="text-secondary text-lg">
              Click the panel toggle button in the navbar to explore the project sidebar.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Sidebar card */}
            <div className="p-6 bg-elevated rounded-2xl border border-border-default hover:border-border-subtle transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <h3 className="font-semibold text-primary text-lg">Sidebar</h3>
              </div>
              <ul className="space-y-2 text-secondary text-sm">
                <li className="flex gap-2">
                  <span className="text-brand">•</span>
                  <span>Floating overlay design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">•</span>
                  <span>Project management tabs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">•</span>
                  <span>Accessible navigation</span>
                </li>
              </ul>
            </div>

            {/* Navbar card */}
            <div className="p-6 bg-elevated rounded-2xl border border-border-default hover:border-border-subtle transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-brand" />
                <h3 className="font-semibold text-primary text-lg">Navbar</h3>
              </div>
              <ul className="space-y-2 text-secondary text-sm">
                <li className="flex gap-2">
                  <span className="text-brand">•</span>
                  <span>Fixed top position</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">•</span>
                  <span>Contextual toggle button</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">•</span>
                  <span>Extensible layout</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Color palette showcase */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Design System</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-surface rounded-xl border border-border-default">
                <p className="text-xs text-muted mb-2">Surface</p>
                <div className="h-16 bg-surface rounded border border-border-subtle" />
              </div>
              <div className="p-4 bg-surface rounded-xl border border-border-default">
                <p className="text-xs text-muted mb-2">Elevated</p>
                <div className="h-16 bg-elevated rounded border border-border-subtle" />
              </div>
              <div className="p-4 bg-surface rounded-xl border border-border-default">
                <p className="text-xs text-muted mb-2">Brand Accent</p>
                <div className="h-16 bg-brand rounded border border-brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </EditorLayout>
  )
}
