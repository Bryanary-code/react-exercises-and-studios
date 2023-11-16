import classes from './ChoresList.module.css';

export default function ChoresList () {
   return  ( <div> <h3 className={classes.choresHeading}>Chores to do</h3>
          <ul></ul><li className={classes.choresText}>Dishes</li>
          <li className={classes.choresText}>Laundry</li> 
          <li className={classes.choresText}>Cut the grass</li></div> )
}