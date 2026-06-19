import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import ServiceDetail from '@/pages/ServiceDetail'
import Contact from '@/pages/Contact'
import Projects from '@/pages/Projects'
import TeamProfile from '@/pages/TeamProfile'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team/:slug" element={<TeamProfile />} />
      