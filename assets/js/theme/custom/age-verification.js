export default class AgeVerification {
    constructor() {
        console.log('AgeVerification: Constructor called');
        this.init();
    }

    init() {
        console.log('AgeVerification: Init started');
        console.log('localStorage ageVerified:', localStorage.getItem('ageVerified'));
        
        if (!localStorage.getItem('ageVerified')) {
            console.log('AgeVerification: User not verified, showing modal');
            setTimeout(() => {
                this.showModal();
            }, 500);
        } else {
            console.log('AgeVerification: User already verified');
        }
    }

   
    showModal() {
    console.log('AgeVerification: Creating modal');
    
    const modalHTML = `
        <div id="ageVerificationModal" style="
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 999999;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
        ">
            <div style="
                background: white;
                max-width: 500px;
                width: 90%;
                padding: 40px 30px;
                border-radius: 10px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                animation: modalSlideIn 0.3s ease-out;
            ">
                <h2 style="font-size: 28px; margin-bottom: 20px; color: #000;">🔞 AGE VERIFICATION</h2>
                <p style="font-size: 18px; margin-bottom: 15px; color: #333;">
                    You must be <strong>21 years or older</strong> to enter this website.
                </p>
                <p style="font-size: 16px; margin-bottom: 30px; color: #666;">
                    Please confirm your age to continue.
                </p>
                
                <div style="display: flex; gap: 15px; justify-content: center;">
                    <button id="ageConfirmYes" style="
                        background-color: #28a745;
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        font-size: 16px;
                        font-weight: bold;
                        border-radius: 5px;
                        cursor: pointer;
                        flex: 1;
                        max-width: 200px;
                    ">YES, I AM 21+</button>
                    
                    <button id="ageConfirmNo" style="
                        background-color: #dc3545;
                        color: white;
                        border: none;
                        padding: 15px 30px;
                        font-size: 16px;
                        font-weight: bold;
                        border-radius: 5px;
                        cursor: pointer;
                        flex: 1;
                        max-width: 200px;
                    ">NO, I AM UNDER 21</button>
                </div>
                
                <p style="margin-top: 25px; font-size: 14px; color: #999;">
                    By entering, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
        
        <style>
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        </style>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('ageVerificationModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create and add new modal
    const div = document.createElement('div');
    div.innerHTML = modalHTML;
    document.body.appendChild(div);
    
    // Get the modal element (it's the first child of div)
    const modal = document.getElementById('ageVerificationModal');
    
    if (modal) {
        console.log('AgeVerification: Modal added to DOM');
        
        // Now get the buttons
        const yesBtn = document.getElementById('ageConfirmYes');
        const noBtn = document.getElementById('ageConfirmNo');
        
        console.log('AgeVerification: Yes button found:', yesBtn);
        console.log('AgeVerification: No button found:', noBtn);
        
        // Add event listeners if buttons exist
        if (yesBtn) {
            yesBtn.addEventListener('click', () => {
                console.log('AgeVerification: Yes clicked');
                localStorage.setItem('ageVerified', 'true');
                modal.remove();
                document.body.style.overflow = '';
            });
        } else {
            console.error('AgeVerification: Yes button not found!');
        }
        
        if (noBtn) {
            noBtn.addEventListener('click', () => {
                console.log('AgeVerification: No clicked');
                window.location.href = 'https://www.google.com';
            });
        } else {
            console.error('AgeVerification: No button not found!');
        }
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
        console.log('AgeVerification: Modal shown successfully');
    } else {
        console.error('AgeVerification: Modal not found after insertion!');
    }
}


}