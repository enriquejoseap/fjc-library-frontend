import React from 'react'
import { Container } from 'react-bootstrap'
import FooterCopyright from '../../components/FooterCopyright'

const AdminFooter = () => {
  return (
    <footer className="p-3 text-light">
      <Container>
        <FooterCopyright />
      </Container>
    </footer>
  )
}

export default AdminFooter