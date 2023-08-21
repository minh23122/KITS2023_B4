package com.example.kits2023_backend_v1.controller;

import com.example.kits2023_backend_v1.model.Article;
import com.example.kits2023_backend_v1.repository.ArticleRepository;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.FirestoreOptions;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.StorageClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.*;
<<<<<<< HEAD

=======
>>>>>>> bb2213773990d6cd99453be024716d5bd70cb5b6

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/article")

public class ArticleController {
    @Autowired
    private ArticleRepository articleRepository;
    @PutMapping("/{id}")
    public Article approveArticle(@PathVariable int id){
        Optional<Article> a=articleRepository.findById(id);
        if(a.isPresent()){
            Article article=a.get();
            article.setStatus(true);
            return articleRepository.save(article);
        }
        return null;
    }
    @Value("${firebase.config.path}")
    private String firebaseConfigPath;
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file")MultipartFile file){
        try{
            FileInputStream serviceAcount=new FileInputStream(firebaseConfigPath);
            FirebaseOptions options=new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAcount)).build();
            FirebaseApp.initializeApp(options);
            // Lưu tệp lên Firebase Storage
            StorageClient storageClient = StorageClient.getInstance();
            String fileName = "articles/"+file.getOriginalFilename();
            storageClient.bucket().create(fileName, file.getInputStream());
            // Lưu đường dẫn đến Firebase vào Firestore
            FirestoreOptions firestoreOptions = FirestoreOptions.getDefaultInstance()
                    .toBuilder().setProjectId("ecofootprint-46f6a")
                    .build();
            Firestore firestore = firestoreOptions.getService();
            DocumentReference document = firestore.collection("articles").document(fileName);
            Map<String, Object> data=new HashMap<>();
            data.put("firebaseUrl","gs://ecofootprint-46f6a.appspot.com/"+fileName);
            document.set(data).get();
            return ResponseEntity.ok("upload sucsessful");
        }
        catch (IOException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error upload file");
        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving file URL");
        }
    }

}
