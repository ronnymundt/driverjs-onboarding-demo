import { Injectable } from '@angular/core';
import { Driver, driver, DriveStep } from 'driver.js';

@Injectable({
  providedIn: 'root',
})
export class DriverjsOnboardingService {
  /**
   * Methode liefert die konfigurierten Schritte inkl. des Contents für die Tour zurück.
   * Weitere Schritte können hier hinzugefügt werden.
   * @private
   */
  private getTourConfigSteps(): DriveStep[] {
    return [
      {
        ...this.getTourStep(
          'dummy',
          'Willkommen',
          `
            <p>Willkommen zur Driver.js Onboarding Tour Demo!</p>
            In dieser Tour zeigen wir dir, wie du mit Driver.js eine interaktive 
            und benutzerfreundliche Einführung in deine Anwendung erstellen kannst. 
            Driver.js ermöglicht es dir, Elemente auf deiner Seite hervorzuheben 
            und dem Benutzer schrittweise die wichtigsten Funktionen und Tools 
            zu erklären. Lass uns loslegen und die Power von Driver.js kennenlernen!
          `,
        ),
      },
      {
        ...this.getTourStep(
          '.pill.link-0',
          'Explore the Docs',
          `
            <p>Hier kannst du die offizielle Dokumentation von Angular einsehen.</p>      
            Es ist ein grossartiger Startpunkt, um die Grundlagen und fortgeschrittene Konzepte von Angular zu lernen.
          `,
        ),
      },
      {
        ...this.getTourStep(
          '.pill.link-1',
          'Learn with Tutorials',
          `
            <p>In diesem Abschnitt findest du Tutorials, die dir helfen, Angular Schritt für Schritt zu lernen.</p>            
            Perfekt für Einsteiger und auch für Entwickler, die ihr Wissen erweitern möchten.
          `,
        ),
      },
      {
        ...this.getTourStep(
          '.pill.link-2',
          'CLI Docs',
          `
            Die Angular Command Line Interface (CLI) Dokumentation bietet dir wertvolle Informationen 
            zur Nutzung der CLI, die dir hilft, Angular-Projekte effizient zu erstellen und zu verwalten.
          `,
        ),
      },
      {
        ...this.getTourStep(
          '.pill.link-3',
          'Angular Language Service',
          `
            <p>Der Angular Language Service hilft dir, die Angular-Syntax direkt in deinem Editor zu verstehen.</p>
            Mit dieser Erweiterung kannst du Code-Vervollständigungen, Fehlererkennung und mehr erhalten.
          `,
        ),
      },
      {
        ...this.getTourStep(
          '.pill.link-4',
          'Angular DevTools',
          `
            <p>Angular DevTools ist ein hilfreiches Tool zur Diagnose und Optimierung von Angular-Anwendungen.</p>
            Mit dieser Erweiterung kannst du deine App im Browser analysieren und verbessern.
          `,
        ),
      },
    ];
  }

  /**
   * Methode liefert den Einzelschritt für die Tour als Objekt zurück
   * @param elementSelector
   * @param title
   * @param description
   * @private
   */
  private getTourStep(
    elementSelector: string,
    title: string,
    description: string,
  ): DriveStep {
    return {
      element: elementSelector,
      popover: {
        title,
        description,
      },
    };
  }

  /**
   * Methode liefert die algm. Konfiguration für die Tour zurück
   * @private
   */
  private getTourConfig(): Driver {
    // erstelle tour
    return driver({
      showButtons: ['next', 'close', 'previous'],
      nextBtnText: 'Weiter',
      doneBtnText: 'Ende',
      prevBtnText: 'Zurück',
      allowClose: true,
      steps: [],
    });
  }

  /**
   * Methode startet die Driver.js Onboarding Tour
   */
  startTour() {
    const tour = this.getTourConfig();
    tour.setSteps(this.getTourConfigSteps());
    tour.drive();
  }
}
