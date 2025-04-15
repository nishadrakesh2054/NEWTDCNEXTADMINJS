import express from 'express';
import { getGalleries ,createGallery,updateGallery, deleteGallery } from '../controllers/galleryController.js'; 

const router = express.Router(); 

router.route('/').get(getGalleries); 
router.route('/').post(createGallery); 
router.route('/:id').put(updateGallery).delete(deleteGallery); 


export default router; 
