import {Component, OnInit} from '@angular/core';
import {SpeakerListService} from '../shared/index';
import {Name, Location, ProfilePicture, Speaker} from '../shared/speaker/speaker.model';

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

  DEFAULT_SPEAKERS_NUMBER: string = '6';
  newSpeaker: Speaker;
  errorMessage: string;
  loading: boolean = true;
  speakers: Speaker[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {SpeakerListService} speakerListService - The injected NameListService.
   */
  constructor(public speakerListService: SpeakerListService) {
  }

  clear() {
    this.initModel();
  }

  initModel() {
    this.newSpeaker = new Speaker(new Name('', ''), new Location(''), '', new ProfilePicture(''), 'male');
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.initModel();
    this.getSpeakers();
  }

  /**
   * Handle the nameListService observable
   */
  getSpeakers() {
    this.loading = true;
    this.speakerListService.get(this.DEFAULT_SPEAKERS_NUMBER)
      .subscribe(
        speakers => {
          // Hard-coded timeout to allow display "progress-bar" component only.
          setTimeout(()=> {
            this.speakers = speakers;
            this.loading = false;
          }, 1500);

          // this.speakers = speakers.results;
          // this.loading = false;
        },
        error => this.errorMessage = <any>error
      );
  }

  addSpeaker() {
    this.speakers.push(this.newSpeaker);
    this.initModel();
    return false;
  }
}
