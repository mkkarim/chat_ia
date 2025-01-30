package com.example.chat_ia.message;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "messages")
@Data
public class Message {

    @Id
    @GeneratedValue
    private Long id;

    private String text;
    private String sender;
    private LocalDateTime timestamp;

    @ElementCollection
    private List<String> imageUrls;
}
