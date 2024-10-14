const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="z-20 flex flex-wrap gap-2 cursor-default pointer-events-none">
      {tags.map((tag) => (
        <div
          key={tag}
          className={
            'rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-700/40 dark:text-zinc-300'
          }
        >
          {tag}
        </div>
      ))}
    </div>
  )
}
export default Tags