import { Highlight } from '@ark-ui/solid/highlight'
import { createSignal } from 'solid-js'

export const WithInput = () => {
  const [query, setQuery] = createSignal('ipsum')
  return (
    <div>
      <input type="text" placeholder="Search" value={query()} onInput={(e) => setQuery(e.target.value)} />
      <br />
      <Highlight
        ignoreCase={false}
        query={query()}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt"
      />
    </div>
  )
}
