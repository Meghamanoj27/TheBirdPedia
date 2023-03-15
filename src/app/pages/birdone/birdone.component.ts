import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-birdone',
  templateUrl:'./birdone.component.html',
  styleUrls: ['./birdone.component.css']
})
export class BirdoneComponent {
  constructor(private obj :HeroService,private router : Router){
       }
    
       terre=this.obj.getData();

     gotoHere(id:any){
       localStorage.setItem('id',id)
        this.router.navigate(['/single'])
     
     }
}





















//   const teen=[
    
    
    
//     {
           
//                "id":"1",
//                "img":"https://static.toiimg.com/photo/msid-83205915/83205915.jpg",
//                "title":"Lets know aboout early age mensuration",
//                "pic":"https://theselfpublisher.com/wp-content/uploads/bb-plugin/cache/C.S.-Lakin-circle.jpg",
//                "author":"C.S Lakin",
//                "date":"01-01-2022",
//                "short":"Female puberty is starting earlier and earlier, with worrying consequences for women's health",
//                "des":"Three weeks before her eighth birthday, Josie got her period at school. Magen, her mother, stopped at a drugstore for supplies before picking up her daughter. In the tampon aisle, she found a shelf of tween” menstrual pads promising to fit smaller bodies.” She remembers thinking, How does this even exist as a product Magen was heartbroken that her seven-year-old was menstruating but not completely surprised. She had begun to notice her daughter’s body odor when Josie was six. By the time Josie turned seven, she was getting blackheads on her nose, slamming doors and sleeping late. She developed breast buds the summer before second grade. That was traumatizing for both of us, Magen says.Magen showed Josie how to put a pad in her underwear and then called the pediatrician, expecting to be referred for some kind of hormonal testing. Instead, Magen recalls, he said, Yes, this happens. She likely won’t be regular for a while, but she’s very clearly in puberty at eight years old.”The average age of menarche, or a girl’s first period, in the U.S. is now 12, according to the most recent data from the Centers for Disease Control and Prevention’s National Health and Nutrition Examination Survey, down from 14 a century ago and as much as six months earlier than 20 or 30 years ago. But puberty does not start with menstruation. The onset of breast development, or thelarche, tends to come first, just as Josie experienced. We’re now seeing thelarche occur 18 months to two years earlier than we did a few decades ago,” says Frank Biro, who studies problems related to pubertal maturation at Cincinnati Children’s Hospital Medical Center. His research, published in 2013 in the journal Pediatrics, put the average age of breast development at 8.8 years old for African-American girls, 9.3 for Hispanic girls, 9.7 for Caucasians and 9.7 for Asian-Americans. The age of breast development has clearly dropped, while the age of menarche has drifted down. They are both concerning, he says.One popular misconception about menarche is that it represents the onset of ovulation; in fact, most girls do not begin ovulating regularly for up to two years after their first period, which is why early ones can be light and irregular. Menarche is instead triggered by changes in a girl’s estrogen levels. The most probable explanation for why periods and breast development might be happening younger is that girls tend to weigh more today than they did a generation ago—and this higher body fat percentage is leading to earlier activation of the pituitary gland, which produces the hormones responsible for puberty.            In Biro’s study, a higher body mass index (BMI) was the strongest predictor of early breast development across all racial groups, although the relation was correlative, not causal. What we need to ask is, Why has BMI gone up?” he says. Decreased physical activity and a more calorically dense diet are probably part of the puzzle. But I think another critical piece is our ubiquitous environmental exposure to endocrine-disrupting chemicals,” or EDCs. This class of chemicals (including phthalates, bisphenol A and others) is used in many consumer products (shower curtains, plastic bottles, couch cushions) and has been shown to mimic estrogen and other naturally occurring hormones in the human body. Biro theorizes that some of these chemicals may promote weight gain or contribute to early puberty by influencing how cells and the body regulate metabolism, which then affects estrogen production. He is currently leading a study tracking the growth and development of 379 girls from age six onward that has been examining relations between their pubertal development and environmental exposures. Trauma could be another explanation: Stress can also change your estrogen levels,” Biro says."
//      },
// ]
// }
