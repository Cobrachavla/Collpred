import React from 'react';
import './collpred.css';
import './global.css';
import Dropdown from './Dropdown';

function CollPred() {
  const MainContent = () => (
    <>
        <div style={{ position: 'relative', textAlign: 'center', color: 'black', fontSize: '3vw', fontFamily: 'Judson', fontWeight: 700, wordWrap: 'break-word', marginTop: '50px' }}>
            Search for colleges
        </div>
        <div style={{ width: '90%', margin: '20px auto', height: '229px', background: '#F4F4F4', borderRadius: '8px', border: '1px #403E3E solid', position: 'relative' }}>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
                    <Dropdown options={['Option 1', 'Option 2', 'Option 3']} style={{ flex: '1 1 18%', minWidth: '140px', height: '56px', background: '#1A2B51', borderRadius: '8px', margin: '5px' }} placeholder="Exam Name" />
                    <Dropdown options={['Option 1', 'Option 2', 'Option 3']} style={{ flex: '1 1 18%', minWidth: '140px', height: '56px', background: '#1A2B51', borderRadius: '8px', margin: '5px' }} placeholder="Marks Scored" />
                    <Dropdown options={['Option 1', 'Option 2', 'Option 3']} style={{ flex: '1 1 18%', minWidth: '140px', height: '56px', background: '#1A2B51', borderRadius: '8px', margin: '5px' }} placeholder="Category" />
                    <Dropdown options={['Option 1', 'Option 2', 'Option 3']} style={{ flex: '1 1 18%', minWidth: '140px', height: '56px', background: '#1A2B51', borderRadius: '8px', margin: '5px' }} placeholder="Course" />
                    <Dropdown options={['Option 1', 'Option 2', 'Option 3']} style={{ flex: '1 1 18%', minWidth: '140px', height: '56px', background: '#1A2B51', borderRadius: '8px', margin: '5px' }} placeholder="Branch" />
                </div>
                
            </div>
        </div>
        <div style={{ width: '90%', margin: '20px auto', maxWidth: '600px', height: '56px', background: '#F5970B', borderRadius: '8px', textAlign: 'center', lineHeight: '56px', fontWeight: '700', color: 'black', fontFamily: 'Khula', fontSize: '23px', cursor: 'pointer' }}>
            Search
        </div>
    </>
);
    return (
        <div style={{ position: 'relative', maxWidth: '100%' }}>
            <img style={{ width: '100%', height: '262px', position: 'relative'}} src="https://www.thoughtco.com/thmb/k4end_sk9Gi3XAp5Q4hBlPAjcPA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg" alt="College" />
            <div style={{ width: '100%', height: '262px',position: 'absolute', top: 0, background: 'rgba(26, 43, 81, 0.55)' }} />
            <div style={{ width: '100%', position: 'absolute', top: '147px', textAlign: 'center', color: 'white', fontSize: '60px', fontFamily: 'Judson', fontWeight: 400, wordWrap: 'break-word'}}>COLLEGE PREDICTOR
            </div>
            <div style={{ width: '100%', height: '46px', position: 'absolute', top: '260px', background: '#EC8845' }} />
            <div style={{ position: 'absolute', top: '270px', left: '5%', color: 'white', fontSize: '24px', fontFamily: 'Judson', fontWeight: 700, wordWrap: 'break-word' }}>College Predictor</div>
            <div style={{ position: 'absolute', top: '270px', right: '5%', color: 'white', fontSize: '20px', fontFamily: 'Judson', fontWeight: 700, wordWrap: 'break-word' }}>Home &gt; College Predictor
            </div>
            <>
           <MainContent />
            </>
           
        </div>
    );
}

export default CollPred;
