
import { Client, Databases, ID, Query } from 'appwrite';
import conf from '../conf/conf';




export class AppwriteCommentService {

    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async addComment({commentText, userId, Slug, username}) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionCommentId,
                ID.unique(),

                {   
                    commentText,
                    userId,
                    Slug,
                    username,
                }
            );
           
        } catch (error) {
            console.log('this is comment error :: ',error);
            
        }

    }

    async getComment(Slug) {

        try {
            return await this.databases.listDocuments(

                conf.appwriteDatabaseId,
                conf.appwriteCollectionCommentId,
                [Query.equal('Slug', Slug) ]
            )

        } catch (error) {
            console.log('this is getComment from commentConfig page ::',error);
            
        }
    }
}


const appwritecommentService = new AppwriteCommentService();

export default appwritecommentService;






