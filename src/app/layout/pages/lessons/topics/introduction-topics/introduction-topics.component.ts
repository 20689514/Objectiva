import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction-topics',
  templateUrl: './introduction-topics.component.html',
  styleUrl: './introduction-topics.component.scss'
})
export class IntroductionTopicsComponent {

  constructor(private router: Router) {}

  showBackgroundContainer: boolean = false;

  ngOnInit(): void {
    // Subscribe to the router's URL to track the current path
    this.router.events.subscribe(() => {
      // Check the current URL
      const currentUrl = this.router.url;
      // If the URL is '/lessons/introduction-topics', do not show the background container
      this.showBackgroundContainer = currentUrl === '/lessons/topics/introduction';
    });
  }

  lesson1Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/introduction-to-OOP-overview');
  }
  lesson2Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/understanding-object-and-classes-overview');
  }
  lesson3Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/introduction-to-java-overview');
  }
  lesson4Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/Basic-OOP-concepts-in-java-overview');
  }
  lesson5Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/class-structure-and-access-overview');
  }
  lesson6Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/basic-object-oriented-design-overview');
  }
  lesson7Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/java-class-libraries-overview');
  }
  lesson8Overview(){
    this.router.navigateByUrl('/lessons/topics/introduction/object-interactions-overview');
  }
}
