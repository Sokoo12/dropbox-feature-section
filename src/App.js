import './Frame.css';
import './global.css'
const Section = ({ title, description, imgSrc }) => (
  <div className="section">
    <div className="image-container">
      <img className="section-icon" alt="" src={imgSrc} />
    </div>
    <div className="text-container">
      <div className="heading">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  </div>
);

const Frame = () => {
  return (
    <div>
      <h1 className='header'>Dropbox supports you and your business at every stage</h1>
    
    <div className="frame">
      <Section
        title="Store and protect your files"
        description="Starting at 3 TB of team storage and backup, with security features like file recovery, password protection, watermarking, and viewer history."
        imgSrc="Component 1.svg"
      />
      <Section
        title="Share your content"
        description="Forget email attachments. With Dropbox, you can deliver large files and share trackable links with real-time document analytics."
        imgSrc="Component 2.svg"
      />
      <Section
        title="Collaborate on your work"
        description="Reduce meetings with Capture and use Replay to streamline feedback and approval processes on video projects."
        imgSrc="Component 3.svg"
      />
      <Section
        title="Manage your business"
        description="Make it easy to prepare, send, and eSign your most important contracts with eSignature templates."
        imgSrc="Component 4.svg"
      />
    </div>
    </div>
  );
};

export default Frame;
