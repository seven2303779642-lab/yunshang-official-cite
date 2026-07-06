import {
  getAllEvents,
  getEventCompactLines,
  getEventCompactLinesTitle,
  getEventImage,
  getEventKey,
  getEventNote,
  getEventParagraphs,
  getEventParticipatingStores,
  getEventParticipatingStoresTitle,
  getEventTitle,
  type EventItem,
} from "@/data/events";
import type { Locale } from "@/data/siteContent";

type EventsListProps = {
  locale: Locale;
};

function EventCardImage({
  event,
  locale,
  title,
}: {
  event: EventItem;
  locale: Locale;
  title: string;
}) {
  return (
    <div className="event-card-image-wrap">
      <div className="event-card-image-hover-layer">
        <img
          src={getEventImage(event, locale)}
          alt={title}
          className="event-card__image"
          draggable={false}
        />
      </div>
    </div>
  );
}

function EventCardTitle({ title }: { title: string }) {
  return <h2 className="event-card__title">{title}</h2>;
}

function EventCard({ event, locale }: { event: EventItem; locale: Locale }) {
  const title = getEventTitle(event, locale);
  const paragraphs = getEventParagraphs(event, locale);
  const participatingStoresTitle = getEventParticipatingStoresTitle(
    event,
    locale,
  );
  const participatingStores = getEventParticipatingStores(event, locale);
  const compactLinesTitle = getEventCompactLinesTitle(event, locale);
  const compactLines = getEventCompactLines(event, locale);
  const note = getEventNote(event, locale);
  const hasParticipatingStores =
    Boolean(participatingStoresTitle) || Boolean(participatingStores?.length);
  const hasCompactLines =
    Boolean(compactLinesTitle) || Boolean(compactLines?.length);

  return (
    <article className="event-card">
      <div className="event-card__layout">
        <EventCardImage event={event} locale={locale} title={title} />

        <div className="event-card__content">
          <EventCardTitle title={title} />

          {event.date ? (
            <p className="event-card__date">{event.date}</p>
          ) : null}

          {event.subtitle ? (
            <p className="event-card__subtitle">{event.subtitle}</p>
          ) : null}

          {paragraphs.length > 0 ? (
            <div className="event-card__paragraphs">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="event-card__text">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}

          {hasParticipatingStores ? (
            <div className="event-card__line-block">
              {participatingStoresTitle ? (
                <p className="event-card__text event-card__line-heading">
                  {participatingStoresTitle}
                </p>
              ) : null}

              {participatingStores && participatingStores.length > 0 ? (
                <div className="event-card__compact-lines">
                  {participatingStores.map((store) => (
                    <p key={store} className="event-card__text">
                      {store}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {hasCompactLines ? (
            <div className="event-card__line-block">
              {compactLinesTitle ? (
                <p className="event-card__text event-card__line-heading">
                  {compactLinesTitle}
                </p>
              ) : null}

              {compactLines && compactLines.length > 0 ? (
                <div className="event-card__compact-lines">
                  {compactLines.map((line) => (
                    <p key={line} className="event-card__text">
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {note ? (
            <p className="event-card__text event-card__note">{note}</p>
          ) : null}

          {event.bullets && event.bullets.length > 0 ? (
            <ul className="event-card__bullets">
              {event.bullets.map((item) => (
                <li key={item} className="event-card__text">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {event.details && event.details.length > 0 ? (
            <ul className="event-card__details">
              {event.details.map((item) => (
                <li key={item} className="event-card__text">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function EventsList({ locale }: EventsListProps) {
  const events = getAllEvents(locale);

  return (
    <section className="events-list bg-[#fff4ec] px-[18px] pb-[180px] pt-8 min-[768px]:px-10 min-[768px]:pb-[220px] min-[768px]:pt-10">
      <div className="mx-auto max-w-[1320px]">
        <ul className="event-card-list">
          {events.map((event) => (
            <li key={getEventKey(event)}>
              <EventCard event={event} locale={locale} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
