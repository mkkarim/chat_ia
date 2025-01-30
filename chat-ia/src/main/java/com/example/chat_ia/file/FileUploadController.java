package com.example.chat_ia.file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
@RestController
@RequestMapping("/api/upload")
public class FileUploadController {
    @Autowired
    private FileStorageService fileStorageService;

    @PostMapping
    public ResponseEntity<List<String>> uploadFiles(@RequestParam("files") MultipartFile[] files) {
        if (files.length > 5) {
            return ResponseEntity.badRequest().body(List.of("Maximum 5 images autorisées"));
        }
        List<String> fileUrls = Arrays.stream(files)
                .map(fileStorageService::storeFile)
                .collect(Collectors.toList());
        return ResponseEntity.ok(fileUrls);
    }

}
