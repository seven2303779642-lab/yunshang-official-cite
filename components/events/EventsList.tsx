import {
  getAllEvents,
  getDescriptionParagraphs,
  getEventKey,
  isEventLinkClickable,
  type EventItem,
} from "@/data/events";
import type { EventsContent, Locale } from "@/data/siteContent";

type EventsListProps = {
  content: EventsContent["list"];
  locale: Locale;
};

type ContentEventItem = EventsContent["list"]["items"][number];

function EventCardImage({
  event,
  clickable,
}: {
  event: EventItem;
  clickable: boolean;
}) {
  const image = (
    <div className="event-card-image-hover-layer">
      <img
        src={event.image}
        alt={event.title}
        className="event-card__image"
        draggable={false}
      />
    </div>
  );

  return (
    <div className="event-card-image-wrap">
      {clickable ? (
        <a href={event.link} className="event-card-image-link">
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}

function EventCardTitle({
  event,
  clickable,
}: {
  event: EventItem;
  clickable: boolean;
}) {
  if (clickable) {
    return (
      <h2 className="event-card__title">
        <a href={event.link} className="event-card__title-link">
          {event.title}
        </a>
      </h2>
    );
  }

  return <h2 className="event-card__title">{event.title}</h2>;
}

function ContentEventCard({
  item,
}: {
  item: ContentEventItem;
}) {
  const clickable = isEventLinkClickable(item.href);

  return (
    <article className="event-card">
      <div className="event-card__layout">
        <div className="event-card-image-wrap">
          {clickable ? (
            <a href={item.href} className="event-card-image-link">
              <div className="event-card-image-hover-layer">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="event-card__image"
                  draggable={false}
                />
              </div>
            </a>
          ) : (
            <div className="event-card-image-hover-layer">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="event-card__image"
                draggable={false}
              />
            </div>
          )}
        </div>

        <div className="event-card__content">
          {clickable ? (
            <h2 className="event-card__title">
              <a href={item.href} className="event-card__title-link">
                {item.title}
              </a>
            </h2>
          ) : (
            <h2 className="event-card__title">{item.title}</h2>
          )}

          {item.date ? <p className="event-card__date">{item.date}</p> : null}

          {item.tag ? (
            <p className="event-card__subtitle">{item.tag}</p>
          ) : null}

          {item.excerpt ? (
            <p className="event-card__text">{item.excerpt}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function EventCard({ event }: { event: EventItem }) {
  const clickable = isEventLinkClickable(event.link);
  const paragraphs =
    event.paragraphs && event.paragraphs.length > 0
      ? event.paragraphs
      : getDescriptionParagraphs(event.description);
  const hasParticipatingStores =
    Boolean(event.participatingStoresTitle) ||
    Boolean(event.participatingStores?.length);
  const hasCompactLines =
    Boolean(event.compactLinesTitle) || Boolean(event.compactLines?.length);

  return (
    <article className="event-card">
      <div className="event-card__layout">
        <EventCardImage event={event} clickable={clickable} />

        <div className="event-card__content">
          <EventCardTitle event={event} clickable={clickable} />

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
              {event.participatingStoresTitle ? (
                <p className="event-card__text event-card__line-heading">
                  {event.participatingStoresTitle}
                </p>
              ) : null}

              {event.participatingStores &&
              event.participatingStores.length > 0 ? (
                <div className="event-card__compact-lines">
                  {event.participatingStores.map((store) => (
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
              {event.compactLinesTitle ? (
                <p className="event-card__text event-card__line-heading">
                  {event.compactLinesTitle}
                </p>
              ) : null}

              {event.compactLines && event.compactLines.length > 0 ? (
                <div className="event-card__compact-lines">
                  {event.compactLines.map((line) => (
                    <p key={line} className="event-card__text">
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {event.note ? (
            <p className="event-card__text event-card__note">{event.note}</p>
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

export default function EventsList({ content, locale }: EventsListProps) {
  if (locale === "en") {
    return (
      <section className="events-list bg-[#fff4ec] px-[18px] pb-[120px] pt-8 min-[768px]:px-10 min-[768px]:pb-[160px] min-[768px]:pt-10">
        <div className="mx-auto max-w-[1320px]">
          <ul className="event-card-list">
            {content.items.map((item) => (
              <li key={`${item.title}-${item.image}`}>
                <ContentEventCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  const events = getAllEvents();

  return (
    <section className="events-list bg-[#fff4ec] px-[18px] pb-[120px] pt-8 min-[768px]:px-10 min-[768px]:pb-[160px] min-[768px]:pt-10">
      <div className="mx-auto max-w-[1320px]">
        <ul className="event-card-list">
          {events.map((event) => (
            <li key={getEventKey(event)}>
              <EventCard event={event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
