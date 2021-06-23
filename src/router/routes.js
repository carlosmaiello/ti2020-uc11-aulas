
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'cadastro', component: () => import('src/pages/Cadastro.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'soma', component: () => import('pages/Soma.vue') },
      { path: 'imc', component: () => import('pages/Imc.vue') },
      { path: 'lista', component: () => import('pages/Lista.vue') },
      { path: 'compras', component: () => import('pages/Compras.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
