import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleConsent = (level) => {
        localStorage.setItem('cookie-consent', level);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent">
            <div className="cookie-consent-content">
                <div className="cookie-consent-text">
                    <h3>我們重視您的隱私</h3>
                    <p>我們使用 cookie 來確保網站的正常運行，並藉由分析流量來提升您的瀏覽體驗。<br/>請選擇您同意的使用層級。</p>
                </div>
                <div className="cookie-consent-actions">
                    <button className="btn-secondary outline" onClick={() => handleConsent('custom')}>自訂偏好</button>
                    <button className="btn-secondary outline" onClick={() => handleConsent('necessary')}>僅必要</button>
                    <button className="btn-primary" onClick={() => handleConsent('all')}>全部接受</button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
