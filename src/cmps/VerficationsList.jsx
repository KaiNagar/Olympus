import { useState } from 'react'
import { VerificationsPreview } from './VerficitaionsPreview'

export const VerificationsList = () => {
  const veris = [
    {
      title: 'לעבוד מתי וכמה שנוח לך',
      img: 'https://cdn-icons-png.flaticon.com/512/850/850909.png',
    },
    {
      title: 'תמיכה ויחס אישי בכל שאלה',
      img: 'https://cdn-icons-png.flaticon.com/512/1660/1660165.png',
    },
    {
      title: 'מועדון הטבות לחברי סנדי',
      img: 'https://cdn-icons-png.flaticon.com/512/66/66834.png',
    },
    {
      title: 'אפליקציית שליחים נוחה וקלה לשימוש (בקרוב)',
      img: 'https://cdn-icons-png.flaticon.com/512/9216/9216180.png',
    },
    {
      title: 'בונוסים בימיפ חמים וגשומים ואירועים מיוחדים',
      img: 'https://cdn-icons-png.flaticon.com/512/5267/5267560.png',
    },
    {
      title: 'צבירת בונוסים למימוש בחרא חרא',
      img: 'https://cdn-icons-png.flaticon.com/512/483/483707.png',
    },
    {
      title: 'חנות מרצנדייז',
      img: 'https://cdn-icons-png.flaticon.com/512/665/665865.png',
    },
    {
      title: 'השכרת ציוד ותחילת עבודה כפרילנסר בהשקעה מינימלית',
      img: 'https://cdn-icons-png.flaticon.com/512/66/66601.png',
    },
  ]
  return (
    <section className='verifications-list'>
      {veris.map((ver) => (
        <VerificationsPreview key={ver.img} ver={ver} />
      ))}
    </section>
  )
}
