import { WannaJoin } from "../cmps/WannaJoin"

export const JoinInfo = () => {
  return (
    <section className='join-info flex column align-center'>
      <h1 className="join-title">מהפכת השליחים כבר כאן!!</h1>
      <h3 className="join-subtitle">אולימפוס מזמינה אתכם להצטרף למשפחה שלנו!</h3>
      <span className="join-desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rem id
        facilis dolorum cum, sequi beatae quam incidunt excepturi ad hic atque
        repellat neque aliquam sit quod ipsum dolorem aperiam.
      </span>

      {/* ------------------Table------------------ */}

      <table className='join-table'>
        <thead>
          <tr>
            <th></th>
            <th>שכיר בחברה</th>
            <th>קבלן עצמאי - פרילנסר</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>מחיר לשעה - לא כולל טיפים</th>
            <td>30 ש"ח לשעה</td>
            <td>החל מ-20 ש"ח למשלוח</td>
          </tr>
          <tr>
            <th>זכויות סוציאליות</th>
            <td>
              תשלום לביטוח לאומי, ימי חופש, הבראה, פנסיה וקרן פיצויים ע"פ חוק
            </td>
            <td>
              חובת הפרשה עצמית לפנסיה לאחר שלושה חודשים פלוס תשלום לביטוח לאומי
              על אחריות השליח ע"פ חוק
            </td>
          </tr>
          <tr>
            <th>החזר הוצאות בגין דלק או ביטוח</th>
            <td>תוספת 3 ש"ח למשלוח</td>
            <td>ללא</td>
          </tr>
          <tr>
            <th>חובת שיריות - עד 6 שעות ביום</th>
            <td>5 שעות לפחות + 1 בסופ"ש</td>
            <td>ללא</td>
          </tr>
          <tr>
            <th>שעות נוספות</th>
            <td>תשלו שעות נוספות ע"פ חוק</td>
            <td>אין</td>
          </tr>
          <tr>
            <th>שימוע לפני פיטורים</th>
            <td>כמתחייב לפי החוק</td>
            <td>לא רלוונטי</td>
          </tr>
          <tr>
            <th>עבודה אישית</th>
            <td>השליח הוא העובד היחידי</td>
            <td>הקבלן רשאי להביא עובדים מטעמו</td>
          </tr>
          <tr>
            <th>הסכם עבודה</th>
            <td>הסכם אישי</td>
            <td>הסכם קבלן</td>
          </tr>
        </tbody>
      </table>

      <WannaJoin />
    </section>
  )
}
