import { Component, OnInit } from '@angular/core';
import { SpeakerListService } from '../shared/index';
import { Speaker } from '../shared/speakers/speakers.model';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newSpeaker: Speaker;
  errorMessage: string;
  speakers: Speaker[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {SpeakerListService} speakerListService - The injected NameListService.
   */
  constructor(public speakerListService: SpeakerListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getSpeakers();
  }

  /**
   * Handle the nameListService observable
   */
  getSpeakers() {
    this.speakerListService.get()
      .subscribe(
        speakers => this.speakers = speakers.results,
        error =>  this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addSpeaker(): boolean {
    // TODO: implement nameListService.post
    this.speakers.push(this.newSpeaker);
    this.newSpeaker = null;
    return false;
  }

}
