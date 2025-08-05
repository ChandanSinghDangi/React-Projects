
import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'


export class AuthService {

    client = new Client();
    account;

    constructor () {

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);        

    }

    async createAccount({name, email, password}) {

        try {
            const userData = await this.account.create(ID.unique(), email, password, name);
            console.log('this is userData from createAccount: ',userData);
            
            if(userData) {
                return this.loginAccount({email, password});
            } else {
                return userData
            }
        } catch (error) {
            console.log('this is createAccount error: ', error);   
        }
    }

    async loginAccount({email, password}) {

        try {
            console.log('this is loginAccount');
            
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log('this is loginAccount error: ', error);
        }
    }

    async getCurrentUser() {

        try {
            return await this.account.get();
            
        } catch (error) {
            if(error.code === 401) { 
                return null;
            }
            console.log('this is getCurrentUser unexpected error: ', error); 
            return null;
        }
    }

    async logoutAccount() {

        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log('this is logoutAccount error: ', error);
            
        }
    }
    
}

const authService = new AuthService();

export default authService;

















