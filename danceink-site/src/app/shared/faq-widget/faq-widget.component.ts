import { Component, DestroyRef, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { FAQ_CATEGORIES, FEATURED_FAQ_IDS } from '../../data/faq';
import { FaqItem } from '../../data/models';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';
import { matchesQuery } from '../utils/search-text';

const ALL_QUESTIONS: FaqItem[] = FAQ_CATEGORIES.flatMap((category) => category.items);
const FEATURED_QUESTIONS: FaqItem[] = ALL_QUESTIONS.filter((item) => FEATURED_FAQ_IDS.includes(item.id));

/**
 * A chat-style panel in the corner of every page. Visitors tap a predefined question to
 * show its answer underneath, and tap it again to hide it, or type to search every FAQ
 * question and answer. There is no AI behind it: search matches the written FAQ text.
 */
@Component({
  selector: 'app-faq-widget',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ContactActionsComponent],
  templateUrl: './faq-widget.component.html',
  styleUrl: './faq-widget.component.css'
})
export class FaqWidgetComponent {
  @ViewChild('conversation') private conversation?: ElementRef<HTMLElement>;

  private readonly translate = inject(TranslateService);

  isOpen = false;
  query = '';
  /** Ids of the questions whose answers are showing. */
  openAnswers = new Set<string>();
  /** The featured questions, or the search results while the visitor is typing. */
  questions: FaqItem[] = FEATURED_QUESTIONS;

  constructor() {
    // Search runs on the translated text, so redo it when the visitor switches language.
    this.translate.onLangChange.pipe(takeUntilDestroyed(inject(DestroyRef))).subscribe(() => this.search(this.query));
  }

  get isSearching(): boolean {
    return this.query.trim().length > 0;
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  search(query: string): void {
    this.query = query;
    this.questions = this.isSearching
      ? ALL_QUESTIONS.filter((item) => matchesQuery(this.searchableText(item), query))
      : FEATURED_QUESTIONS;
  }

  private searchableText(item: FaqItem): string {
    const keys = [item.questionKey, item.answerKey, ...(item.keywordsKey ? [item.keywordsKey] : [])];
    return keys.map((key) => this.translate.instant(key)).join(' ');
  }

  isAnswerOpen(item: FaqItem): boolean {
    return this.openAnswers.has(item.id);
  }

  toggleAnswer(item: FaqItem): void {
    if (this.openAnswers.delete(item.id)) {
      return;
    }
    this.openAnswers.add(item.id);
    // Wait for the answer to render, then make sure all of it is in view.
    setTimeout(() => {
      const answer = this.conversation?.nativeElement.querySelector<HTMLElement>(`#faq-widget-answer-${item.id}`);
      answer?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
