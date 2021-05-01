# Getting Started

## Installation

```
yarn add react-supabase @supabase/supabase-js
# or
npm install --save react-supabase @supabase/supabase-js
```

## Quick Start

Create a Supabase client and pass it to the `Provider`:

```js
import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'

const client = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

const App = () => (
  <Provider value={client}>
    <YourRoutes />
  </Provider>
)
```

Now every component inside and under the `Provider` can use the Supabase client (`useClient`) and related hooks (`useSelect`, `useSignIn`, `useSubscription`, etc.):

```js
import { useSelect } from 'react-supabase'

const Todos = () => {
  const [result, reexecuteSelect] = useSelect('todos')

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
```