import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('basic-info');
  const [formData, setFormData] = useState({
    orgName: 'CALAO',
    ein: '12-3456789',
    yearFounded: '2015',
    contactName: 'Padre Jose',
    title: 'Executive Director',
    email: 'padrejose@calao.org',
    phone: '(555) 123-4567'
  });

  const sections = [
    { id: 'basic-info', name: 'Basic Information', icon: '📋', status: 'in-progress' },
    { id: 'narrative', name: 'Narrative', icon: '📝', status: 'not-started' },
    { id: 'governance', name: 'Governance', icon: '🏛️', status: 'completed' },
    { id: 'management', name: 'Management', icon: '👥', status: 'not-started' },
    { id: 'financials', name: 'Financials', icon: '💰', status: 'not-started' },
    { id: 'programs', name: 'Programs', icon: '📊', status: 'not-started' },
    { id: 'impact', name: 'Impact', icon: '📈', status: 'not-started' },
    { id: 'compliance', name: 'Compliance', icon: '✅', status: 'not-started' },
    { id: 'technology', name: 'Technology', icon: '💻', status: 'not-started' },
    { id: 'communications', name: 'Communications', icon: '📢', status: 'not-started' },
    { id: 'donations', name: 'Donations', icon: '🤝', status: 'not-started' },
    { id: 'risk-management', name: 'Risk Management', icon: '🛡️', status: 'not-started' },
    { id: 'insurance', name: 'Insurance', icon: '☂️', status: 'not-started' },
    { id: 'locations', name: 'Other Locations', icon: '📍', status: 'not-started' },
    { id: 'additional', name: 'Additional Info', icon: '➕', status: 'not-started' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Top Bar */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '1.5em', margin: 0 }}>
          🏛️ Nonprofit Grant Application System
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '5px 15px', borderRadius: '15px' }}>
            35% Complete
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Admin User</span>
            <button style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{
          width: '280px',
          background: 'white',
          borderRight: '1px solid #e5e7eb',
          overflowY: 'auto',
          boxShadow: '2px 0 10px rgba(0,0,0,0.05)'
        }}>
          <div style={{ padding: '20px', background: '#f8f9fa', borderBottom: '1px solid #e5e7eb' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1em' }}>Application Progress</h3>
            <div style={{ background: '#e5e7eb', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ background: '#10b981', height: '100%', width: '35%', transition: 'width 0.3s' }}></div>
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            {sections.map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  marginBottom: '5px',
                  cursor: 'pointer',
                  background: activeSection === section.id ? '#ede9fe' : 'transparent',
                  color: activeSection === section.id ? '#7c3aed' : section.status === 'completed' ? '#10b981' : '#4b5563',
                  fontWeight: activeSection === section.id ? '600' : '400',
                  transition: 'all 0.3s'
                }}
              >
                <span style={{ marginRight: '12px', fontSize: '1.2em' }}>{section.icon}</span>
                <span style={{ flex: 1 }}>{section.name}</span>
                {section.status === 'completed' && <span>✓</span>}
                {section.status === 'in-progress' && <span style={{ fontSize: '0.8em' }}>●</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '30px', overflowY: 'auto', background: '#f5f5f5' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Content Header */}
            <div style={{
              background: 'white',
              padding: '25px',
              borderRadius: '12px',
              marginBottom: '25px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <h2 style={{ margin: '0 0 10px 0', color: '#1f2937' }}>Basic Information</h2>
              <p style={{ margin: 0, color: '#6b7280' }}>
                Please provide your organization's basic information. All fields marked with * are required.
              </p>
            </div>

            {/* Form Section */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ margin: '0 0 20px 0', paddingBottom: '10px', borderBottom: '2px solid #e5e7eb' }}>
                Organization Details
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    name="orgName"
                    value={formData.orgName}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '0.95em'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>
                    EIN/Tax ID *
                  </label>
                  <input
                    type="text"
                    name="ein"
                    value={formData.ein}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '0.95em'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>
                    Primary Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '0.95em'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '0.95em'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>
                  Mission Statement *
                </label>
                <textarea
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '0.95em',
                    resize: 'vertical'
                  }}
                  defaultValue="To empower communities through education, healthcare, and sustainable development initiatives that create lasting positive change."
                />
              </div>
            </div>

            {/* Document Upload Section */}
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ margin: '0 0 20px 0', paddingBottom: '10px', borderBottom: '2px solid #e5e7eb' }}>
                Documents
              </h3>
              
              <div style={{
                border: '2px dashed #d1d5db',
                borderRadius: '8px',
                padding: '30px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '3em', color: '#9ca3af', marginBottom: '10px' }}>📁</div>
                <h4 style={{ margin: '0 0 10px 0' }}>Drop files here or click to upload</h4>
                <p style={{ margin: 0, color: '#6b7280' }}>Support for PDF, DOC, DOCX, XLS, XLSX (Max 10MB)</p>
              </div>

              <div style={{ marginTop: '20px' }}>
                <div style={{
                  padding: '10px',
                  background: '#f9fafb',
                  borderRadius: '6px',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>📄 IRS 501c3 Letter.pdf</span>
                  <span style={{ color: '#10b981' }}>✓ Uploaded</span>
                </div>
                <div style={{
                  padding: '10px',
                  background: '#f9fafb',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>📄 Board Resolution.pdf</span>
                  <span style={{ color: '#10b981' }}>✓ Uploaded</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'space-between'
            }}>
              <button style={{
                background: 'white',
                color: '#6b7280',
                border: '1px solid #d1d5db',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                💾 Save Draft
              </button>
              <button style={{
                background: '#7c3aed',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500'
              }}>
                Continue to Narrative →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-save indicator */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: '#d1fae5',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <span>✓</span>
        <span>All changes saved</span>
      </div>

      {/* GitHub Backup Notice */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        background: '#fef3c7',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        maxWidth: '300px'
      }}>
        <strong>✅ Backup Complete</strong>
        <a href="https://github.com/padrejose-calao/nonprofit-application-complete-backup" 
           target="_blank" 
           rel="noopener noreferrer"
           style={{ color: '#0066cc', fontSize: '0.9em' }}>
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default App;