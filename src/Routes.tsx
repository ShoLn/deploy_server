import { Suspense, lazy, ComponentType } from 'react'
import { Routes, Route } from 'react-router-dom'

// 以下為 Pages Lazy Loading
// 可參考 https://reactrouter.com/docs/en/v6/examples/lazy-loading
const Home = lazy(() => import('./pages/Home'))
const FieldPage = lazy(() => import('./pages/field-page'))
const AccountPage = lazy(() => import('./pages/account-page'))
const GroupPage = lazy(() => import('./pages/group-page'))
const InventoryPage = lazy(() => import('./pages/inventory-page'))

const SuspenseWrapper = ({
  component: Component,
  ...rest
}: {
  component: ComponentType //代表 functional component 或 class component
}) => {
  return (
    <Suspense fallback={<>...</>}>
      <Component {...rest} />
    </Suspense>
  )
}

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<SuspenseWrapper component={Home} />} />
      <Route path="/field-page" element={<SuspenseWrapper component={FieldPage} />} />
      <Route
        path="/account-page"
        element={<SuspenseWrapper component={AccountPage} />}
      />
      <Route
        path="/group-page"
        element={<SuspenseWrapper component={GroupPage} />}
      />
      <Route
        path="/inventory-page"
        element={<SuspenseWrapper component={InventoryPage} />}
      />
    </Routes>
  )
}

export default Routing
