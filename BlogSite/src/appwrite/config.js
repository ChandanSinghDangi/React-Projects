
import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";


export class AppwriteServices {

    client = new Client();
    databases;
    bucket;

    constructor() {

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title, content, featuredImage, status, slug, userId}) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {

            console.log('this is createDocument error :: ',error);   
        }

    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            
            console.log('this is updatePost error :: ',error);
        } 
    }

    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('this is deletePost error :: ',error);
            
        }
    }

    async getPost(slug) {
        try {
            return this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('this is getPost error :: ',error);  
        }
    }

    async getPosts( queries = [ Query.equal('status', 'active')] ) {
        try {  
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log('this is getPosts error :: ',error);
            
        }
    }


    // From here Bucket Services starts :-


    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(), // unique for file which will later on be featuredImageId. i think!
                file
            )
        } catch (error) {

            console.log('this is uploadFile error :: ',error);
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {

            console.log('this is deleteFile error :: ',error);
        }
    }

    fileView(fileId) {
        
        return this.bucket.getFileView ( // changed from view to preview file
            conf.appwriteBucketId,
            fileId
        )
    }
}


const appwriteServices = new AppwriteServices();

export default appwriteServices;










