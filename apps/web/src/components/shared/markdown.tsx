import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

/** Renders trusted markdown (blog bodies, legal pages) with house typography. */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="max-w-none space-y-4 text-[15px] leading-relaxed text-foreground/90">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          h2: (props) => <h2 className="mt-8 text-2xl font-semibold tracking-tight" {...props} />,
          h3: (props) => <h3 className="mt-6 text-xl font-semibold tracking-tight" {...props} />,
          p: (props) => <p className="leading-relaxed" {...props} />,
          ul: (props) => <ul className="list-disc space-y-1.5 pl-6" {...props} />,
          ol: (props) => <ol className="list-decimal space-y-1.5 pl-6" {...props} />,
          a: (props) => <a className="text-primary underline underline-offset-2" {...props} />,
          blockquote: (props) => (
            <blockquote
              className="border-l-4 border-primary/40 pl-4 italic text-muted-foreground"
              {...props}
            />
          ),
          code: (props) => (
            <code className="rounded bg-secondary px-1.5 py-0.5 text-[0.85em]" {...props} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
