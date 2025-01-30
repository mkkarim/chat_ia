package com.example.chat_ia.image;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class Image {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String type;

    @Lob
    private byte[] data;

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public byte[] getData() {
        return data;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}