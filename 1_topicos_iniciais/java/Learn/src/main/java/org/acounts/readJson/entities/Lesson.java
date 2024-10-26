package org.acounts.readJson.entities;

import java.time.Instant;

public class Lesson {
    private long id;
    private String title;
    private String media;
    private Instant timestamp;

    public Lesson(){}

    public Lesson(long id, String title, String media, Instant timestamp) {
        this.id = id;
        this.title = title;
        this.media = media;
        this.timestamp = timestamp;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMedia() {
        return media;
    }

    public void setMedia(String media) {
        this.media = media;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }


    @Override
    public String toString() {
        return "Lesson{" +
                "media='" + media + '\'' +
                ", title='" + title + '\'' +
                ", id=" + id +
                '}';
    }
}
